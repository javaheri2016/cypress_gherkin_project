Feature: O mnie
Scenario: visiting the O mnie page 
Given User opens "javaheri.pl" website
When User clicks on the O mnie button from header 
Then User see text "Wykształcenie i doświadczenie zawodowe"
When User clicks on "Doświadcznie zawodowe"
Then User see in the table the name of Promo.com company 
When User clicks on Promo.com link 
Then The Promo.com website is opened 


    Feature Description  