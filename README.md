---

# **Word Scramble Game**

A simple Word Scramble game built with **HTML**, **JavaScript**, and styled using **Tailwind CSS**. The goal of the game is to guess the scrambled word within the given time limit. You can score points by submitting correct answers and requesting hints if needed.

## **Table of Contents**

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [How to Play](#how-to-play)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## **Features**

- Displays a scrambled word that the user needs to guess.
- Timer functionality: You have 30 seconds to guess as many words as possible.
- A "Hint" button provides a clue for the scrambled word.
- Feedback is shown for both correct and incorrect answers.
- The game shows the final score after the timer ends.
- Responsive design using **Tailwind CSS** for a clean, modern UI.
  
## **Technologies Used**

- **HTML5**: Structuring the game's interface.
- **JavaScript**: The core logic of scrambling words, checking answers, and handling the timer.
- **Tailwind CSS**: For designing a responsive, user-friendly interface without writing custom CSS.
  
## **Setup and Installation**

Follow these instructions to set up the game on your local machine:

1. **Clone the repository**:
   ```bash
   https://github.com/duttaanirban/Scramble_Words.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Scramble_Words
   ```

3. **Open the game**:
   - Simply open the `index.html` file in any modern web browser (e.g., Chrome, Firefox, Edge).
   
   You can double-click the `index.html` file, or right-click and choose "Open With" and select your preferred browser.

## **How to Play**

1. When the game starts, a scrambled word will be displayed on the screen.
2. You have 30 seconds to guess the correct word.
3. Enter your guess in the input field and click **Submit** to check your answer.
   - **Correct Answer**: You’ll earn 10 points and a new scrambled word will appear.
   - **Incorrect Answer**: You'll be prompted to try again.
4. Click **Hint** if you need help, and a hint will be displayed for the current word.
5. The game ends when the timer reaches zero, and your total score will be displayed.

## **Folder Structure**

```
├── index.html     # The main HTML file
├── script.js      # JavaScript file containing the game logic
├── tailwind.css   # Tailwind CSS file (loaded via CDN)
└── README.md      # This readme file
```

## **Contributing**

Contributions are welcome! If you have any improvements or suggestions, feel free to fork the repository and submit a pull request.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.
---
