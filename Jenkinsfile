pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Sundar-27/New_playwright_git.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'  // Install Playwright dependencies
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'  // Run Playwright tests without Allure reporter
            }
        }

        stage('Publish Reports') {
            steps {
                // No allure step, so no action needed here
                echo 'Publishing test reports...'  // Example placeholder
            }
        }
    }

    post {
        always {
            // No need for Allure artifacts, but we can archive other reports if necessary
            echo 'Post actions executed, no specific reports to publish.'
        }
    }
}
