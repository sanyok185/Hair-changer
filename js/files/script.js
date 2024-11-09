// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";



let slideIndex = 0;

    function showSlides() {
        const slides = document.getElementsByClassName("slide");

        // Прибираємо клас "active" у всіх слайдів
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }

        // Збільшуємо індекс слайду на 1
        slideIndex++;
        
        // Якщо індекс перевищує кількість слайдів, повертаємо його до 1
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        
        // Додаємо клас "active" для поточного слайду
        slides[slideIndex - 1].classList.add("active");

        // Змінювати слайд кожні 3 секунди
        setTimeout(showSlides, 4000);
    }

    // Запускаємо слайдшоу
    showSlides();