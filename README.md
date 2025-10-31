# Logistic Regression App

This Shiny app allows you to explore the Titanic passenger data and
analyze survival outcomes through visualizations and logistic regression
models. By using the app, you will deepen your understanding of how
different factors like sex, age, and passenger class influenced survival
chances on the Titanic.

### 1. Exploring Data Patterns

- Visualize survival rates by **sex**, **age**, and **class**.  
- Understand distributions and relationships through **alluvial plots**,
  which show how groups flow across categories such as sex, age group,
  and class.

### 2. Understanding Logistic Regression Models

- See how different models with various predictors (sex, age, class)
  affect the model.  
- Interpret **Odds Ratio** plots to understand how each factor increases
  or decreases the chance of survival.

### 3. Making Predictions

- Input your own hypothetical passenger characteristics (sex, age,
  class) and see the predicted probability of survival.

### 4. Evaluating Model Performance

- Explore model accuracy with **confusion matrices** that show how many
  passengers were (in-) correctly predicted to survive.  
- Understand **ROC curves**, which measure the model’s ability to
  discriminate between survivors and non-survivors.

Ready to dive in? You can inspect the app on my
[website](http://edgar-treischl.de/projects) or run the app via:

``` r
library(shiny)
runGitHub("LogisticApp", "edgar-treischl", ref="main")
```
