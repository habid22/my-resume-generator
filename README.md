# coderesume.

**coderesume.** is a web-based tool that allows Computer Science and Software Engineering students to quickly generate LaTeX code for professional resumes based on answers provided in fields. This simplifies the process of creating a clean and structured resume, eliminating the need for manual LaTeX formatting and helping users focus on their content.

## Website

You can visit the live website here: [coderesume.](https://coderesume-alpha-testing.vercel.app/)

## Features

- **User-Friendly Form**: Input personal, educational, and work experience details in an easy-to-use form.
- **Automatic LaTeX Generation**: Based on the provided information, CodeResume automatically generates professional LaTeX code.
- **Instant Preview**: See the LaTeX output in real time, making it easier to tweak and improve the resume before exporting.
- **Export Functionality**: Download the generated LaTeX code and use it to create beautifully formatted resumes with minimal effort.
- **Optimized for CS & SE Students**: Fields are tailored to the specific needs of Computer Science and Software Engineering students, ensuring the generated resumes contain relevant sections.

## Technologies

coderesume. is built with modern web development technologies:
- **JavaScript**: Dynamic client-side logic and form handling.
- **Node.js**: Server-side processing and LaTeX generation logic.
- **Python**: Utilized for additional processing tasks and backend operations.
- **HTML/CSS**: For structuring and styling the web interface.

## How to Set Up Locally

If you’d like to run **CodeResume** locally for development purposes, follow these instructions:

### Prerequisites
- **Node.js** (v14 or higher)
- **Python** (v3.6 or higher)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/CodeResume.git
    ```

2. Navigate to the project directory:
    ```bash
    cd CodeResume
    ```

3. Install Node.js dependencies:
    ```bash
    npm install
    ```

4. Set up the Python environment (if applicable):
    ```bash
    python -m venv env
    source env/bin/activate # For Linux/macOS
    .\env\Scripts\activate  # For Windows
    pip install -r requirements.txt
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

6. Open the browser and navigate to `http://localhost:3000` to access the app locally.

## Usage

1. Open the website or run the app locally.
2. Fill in your personal, academic, and work experience details in the provided fields.
3. As you input your information, LaTeX code will be generated in real-time.
4. Review the LaTeX code and make any necessary adjustments.
5. Download the LaTeX file and use it to create a professional resume.

## Contributing

We welcome contributions to **CodeResume**! If you would like to contribute, please follow the steps below:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request and provide details about your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
