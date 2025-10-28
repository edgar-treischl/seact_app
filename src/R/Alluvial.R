# In R
library(ggplot2)
library(tibble)

set.seed(2)
y <- rep(c(0, 1), 500)
x <- 10 + rnorm(250, 3, 3) + rnorm(250, 10, 3) * y
data <- tibble(x, y)

# Linear regression plot
ggplot(data, aes(x, y)) +
  geom_point(color = "gray") +
  geom_smooth(method = "lm", color = "#008080") +
  theme_bw(base_size = 18)

#ggsave("linear_regression.png", width = 6, height = 4, dpi = 200)

# Logistic regression plot
ggplot(data, aes(x, y)) +
  geom_point(color = "gray") +
  geom_smooth(method = "glm", method.args = list(family = "binomial"), color = "#008080") +
  theme_bw(base_size = 18)


#ggsave("logistic_regression.png", width = 6, height = 4, dpi = 200)



