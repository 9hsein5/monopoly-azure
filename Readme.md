# Azure Edition Monopoly

An Azure-themed Monopoly built with HTML/CSS/JavaScript. It maps gameplay to Azure concepts (Deploy, Deallocate, Instances, Premium SKUs, Azure Credits) and turns Chance/Community Chest into architecture scenarios. Human players must correctly answer an Azure architecture/AI quiz before deploying a service.

## Features
- Azure services as properties: AKS, App Service, Functions, Cosmos DB, Synapse, etc.
- Terminology: Deploy/Deallocate, Instances (houses), Premium SKU (hotels), Azure Credits for money.
- Tech Support Case replaces Jail across UI and cards; Premium Support tax replaces Luxury Tax; Azure Licensing tax for 10% or 200 credits.
- 100+ architect/AI quiz questions; each is shown only once per session.
- Scenario-based Chance/Community Chest cards aligned to Azure architecture outcomes.
- Starting credits set to 1500 per player.

## How to Run
1. Open `index.html` in your browser.
2. Choose number of players and names/colors.
3. Roll dice, land on services, answer the quiz to unlock Deploy.

## Files
- `index.html`: App entry and UI layout.
- `styles.css`: Styling.
- `monopoly.js`: Core game engine, turn/land/rent logic, quiz gating.
- `azureedition.js`: Azure board, quiz pool, cards, taxes.
- `images/`: Board and icon assets.

## Rules & Notes
- Quiz is required to deploy: one attempt only; wrong answer loses the turn (Deploy disabled until next roll).
- Quiz pool is one-pass per session; when exhausted, deploy proceeds without a quiz and a message is shown.
- Admin approval on Azure Challenge: on approval, player gets +100 Credits and a one-time quiz bypass for the next deploy.
- LICENSE retained from original project; this edition customizes theme and mechanics.

## Credits
Based on an open-source Monopoly implementation; extended for Azure architecture training scenarios.
