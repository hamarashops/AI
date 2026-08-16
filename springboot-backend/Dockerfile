# Use a specific Java runtime as a base image.
# Using a specific version is a best practice for security and stability.
FROM eclipse-temurin:17-jdk-jammy

# Set the working directory inside the container
WORKDIR /app

# Copy the executable JAR file from the target folder into the container.
# This assumes you have already built your project using './mvnw.cmd clean install'.
# The JAR is renamed to 'app.jar' for a simpler ENTRYPOINT command.
COPY target/springboot-backend-0.0.1-SNAPSHOT.jar app.jar

# Expose the port that the application will run on.
# This should match the port configured in your application.properties.
EXPOSE 8080

# The command to run the application when the container starts.
ENTRYPOINT ["java", "-jar", "app.jar"]
