# --- Libraries ---
library(ggplot2)
library(titanic)
library(ggbeeswarm)
library(viridis)
library(thematic)
library(broom)
library(dplyr)
library(tidyr)
library(magrittr)

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



or_plot <- function(model_name) {
  tidy(model_call(model_name)) %>%
    mutate(oddsRatio = exp(estimate)) %>%
    select(term, oddsRatio) %>%
    mutate(term = replace(term, term == "(Intercept)", NA)) %>%
    drop_na() %>%
    ggplot(aes(x = term, y = oddsRatio)) +
    geom_bar(stat = "identity") +
    geom_text(aes(label = round(oddsRatio, 3)), vjust = -1, size = 6) +
    ylab("Odds Ratio") +
    xlab("Coefficient") +
    theme_bw(base_size = 16) +
    expand_limits(y = c(0, 2)) +
    scale_color_manual(values = c("#2C3E50"))
}

or_plot("m1")
ggsave("src/assets/or_m1.png", width = 6, height = 4, dpi = 200)


or_plot("m2")
ggsave("src/assets/or_m2.png", width = 6, height = 4, dpi = 200)

or_plot("m3")
ggsave("src/assets/or_m3.png", width = 6, height = 4, dpi = 200)





ggplot(train_df, aes(x = Sex, fill = Survived)) +
  geom_bar() +
  geom_text(stat = "count", aes(label = after_stat(count)), vjust = -1, position = position_stack(vjust = 0), size = 6) +
  ylab("Count") +
  scale_fill_manual(values = c("#009E73", "#E69F00")) +
  theme_bw(base_size = 18) +
  theme(legend.position = "bottom")


ggsave("src/assets/or_count.png", width = 6, height = 4, dpi = 200)

