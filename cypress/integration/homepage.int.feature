Feature: Homepage Tests

Scenario: Visiting the homepage
Given User opens 'javaheri.pl' website
Then I should see a text 

Scenario Outline: Visiting the <link> page 
Given User opens 'javaheri.pl' website
When User clicks on the <link> button from header 
Then User see text <text>

Examples:
| link          | text                 |
| O mnie        | Kursy i osiągnięcia  |
| Projekty      | Zrealizowane strony  |
| Blog          | Czytaj dalej         |
| Kontakt       | Zwykle odpowiadam    |
| Dowiedz się   | Kursy i osiągnięcia  |

