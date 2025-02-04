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
                // Remove allure results step since you're not using it
                // allure results: [[path: 'allure-results']]
            }
        }
    }

    post {
        always {
            // No need to archive Allure results or junit if not using allure
            // archiveArtifacts 'allure-results/**'  
            // junit '**/results.xml'  // Publish test results, you may need to adjust this based on Playwright output
        }
    }
}
