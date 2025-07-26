// src/components/Footer/Footer.jsx
import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import TicTacToeGame from "./TicTacToeGame";

// Набор цитат
const quotes = [
  "Лучший способ предсказать будущее — создать его.",
  "Код — это поэзия для инженера.",
  "Всегда стремись к совершенству, но никогда не жди его.",
  "Плохой код — это технический долг, который придется отдавать.",
  "Учись на ошибках, но не живи ими.",
];

// Мини-игра: кликни по кругу, чтобы набрать очки
const ClickCircleGame = () => {
  const [score, setScore] = useState(0);
  return (
    <div className={styles.game}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        onClick={() => setScore((s) => s + 1)}
        className={styles.gameSvg}
      >
        <circle cx="50" cy="50" r="40" className={styles.gameCircle} />
      </svg>
      <p className={styles.gameScore}>Score: {score}</p>
      <small className={styles.gameHint}>(кликни по шару)</small>
    </div>
  );
};

const Footer = () => {
  // время
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // погода (пример для Киева)
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=YOUR_API_KEY`
    )
      .then((r) => r.json())
      .then((data) => {
        setWeather({
          temp: Math.round(data.main.temp),
          desc: data.weather[0].main,
        });
      })
      .catch(() => {
        // на случай ошибки
        setWeather({ temp: "--", desc: "N/A" });
      });
  }, []);

  // случайная цитата
  const [quote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  // счётчик посещений в локалке
  const [visitors, setVisitors] = useState(0);
  useEffect(() => {
    const prev = parseInt(localStorage.getItem("visitorCount") || "0", 10);
    const next = prev + 1;
    localStorage.setItem("visitorCount", next.toString());
    setVisitors(next);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.decorative} />
      <div className={styles.container}>
        <h2 className={styles.title}>Oleh Bilenkyi</h2>
        <p className={styles.subtitle}>Frontend Developer</p>

        <div className={styles.grid}>
          <div className={styles.item}>
            <h3>🕒 Сейчас:</h3>
            <p className={styles.clock}>
              {time.toLocaleTimeString()}
              <br />
              {time.toLocaleDateString()}
            </p>
          </div>

          <div className={styles.item}>
            <h3>☁ Погода:</h3>
            <p className={styles.weather}>
              {weather ? `${weather.temp}°C, ${weather.desc}` : "Загрузка..."}
            </p>
          </div>

          <div className={styles.item}>
            <h3>💬 Цитата дня:</h3>
            <blockquote className={styles.quote}>"{quote}"</blockquote>
          </div>
          <div className={styles.item}>
            <h3>🎮 Крестики-Нолики:</h3>
            <TicTacToeGame />
          </div>

          <div className={styles.item}>
            <h3>👥 Посетителей:</h3>
            <p className={styles.visitors}>{visitors}</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.contactInfo}>
            <a href="mailto:oleh.bilenkyi@gmail.com">
              <i className="fas fa-envelope"></i> Email
            </a>
            <a
              href="https://github.com/OlehBilenkyi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://linkedin.com/in/olehbilenkyi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} OlehVerse. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
