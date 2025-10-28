# R: export_model_summaries.R
library(broom)
library(jsonlite)

# Load your data (e.g., Titanic from datasets)
train_df <- titanic::titanic_train

train_df$Survived <- factor(train_df$Survived, levels = c(0, 1),
                            labels = c("Not survived", "Survived"))

train_df$Pclass <- factor(train_df$Pclass, levels = c(1, 2 , 3),
                          labels = c("First class", "Second class", "Third class"))

# Simplified logistic regression models
m1 <- glm(Survived ~ Sex, data = train_df, family = binomial)
m2 <- glm(Survived ~ Sex + Pclass, data = train_df, family = binomial)
m3 <- glm(Survived ~ Sex + Pclass + Age, data = train_df, family = binomial)

# Extract summaries
summaries <- list(
  m1 = tidy(m1),
  m2 = tidy(m2),
  m3 = tidy(m3)
)

# Save as JSON
write_json(summaries, here::here("src", "assets", "model_summaries.json"), pretty = TRUE)

