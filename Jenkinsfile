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
                bat 'npx playwright test --reporter=allure'  // Run Playwright tests
            }
        }

        stage('Publish Reports') {
            steps {
                allure results: [[path: 'allure-results']]
            }
        }
    }

    post {
        always {
            archiveArtifacts 'allure-results/**'  // Save test reports
            junit '**/results.xml'  // Publish test results
        }
    }
}
