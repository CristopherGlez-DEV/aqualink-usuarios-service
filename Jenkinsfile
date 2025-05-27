pipeline {
  agent any

  tools {
    nodejs 'node18'
  }

  stages {
    stage('Instalar dependencias') {
      steps {
        sh 'npm install'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}
