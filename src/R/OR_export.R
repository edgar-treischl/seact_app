# --- Libraries ---
library(ggplot2)
library(titanic)
library(broom)
library(dplyr)
library(tidyr)
library(jsonlite)

train_df <- titanic::titanic_train

train_df$Survived <- factor(train_df$Survived, levels = c(0, 1),
                            labels = c("Not survived", "Survived"))

train_df$Pclass <- factor(train_df$Pclass, levels = c(1, 2 , 3),
                          labels = c("First class", "Second class", "Third class"))

model_call <- function(type) {
  switch(type,
         m1 = glm(Survived ~ Sex, data = train_df, family = binomial),
         m2 = glm(Survived ~ Sex + Pclass, data = train_df, family = binomial),
         m3 = glm(Survived ~ Sex + Pclass + Age, data = train_df, family = binomial)
  )
}

# Function to compute odds ratios and save as JSON
save_or_data <- function(model_name, file_path) {
  data <- broom::tidy(model_call(model_name)) %>%
    mutate(oddsRatio = exp(estimate)) %>%
    select(term, oddsRatio) %>%
    mutate(term = replace(term, term == "(Intercept)", NA)) %>%
    drop_na()
  
  write_json(data, file_path, pretty = TRUE, auto_unbox = TRUE)
}

# Save all models
save_or_data("m1", "src/data/or_m1.json")


save_or_data("m2", "src/data/or_m2.json")

save_or_data("m3", "src/data/or_m3.json")
