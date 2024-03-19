import { test} from '@playwright/test';
import { HomePagePO } from '../pageObjects/HomePagePO';
import { ResultsPO } from '../pageObjects/ResultsPO';
import { FiltersPO } from '../pageObjects/FiltersPO';
import { Travel } from '../dtos/Travel';
import { SlidersEnum } from '../enums/SlidersEnum';

test.beforeEach(async ({ page }) => {
  await page.goto('');
});

test.describe('Test_A1_MultipleFiltering', () => {
  test('Search for a Flight from Athens to Thessaloniki and verify summary results with all filters applied in default state.', async ({ page }) => {
    const homepage: HomePagePO = new HomePagePO(page);
    const results: ResultsPO = new ResultsPO(page);

    const travel = new Travel();
    await homepage.searchForFlight(travel);
    await results.verifySummaryResults();
    await results.verifyNumberOfFlights('350 Flights');

    await filterFlight(page, 'Aegean Airlines');
    await results.verifyCompanyName('Aegean Airlines');

    await filterFlight(page, 'Olympic Air');
    await results.verifyCompanyName('Olympic Air');

    await filterFlight(page, 'SKY express');
    await results.verifyCompanyName('SKY express');

    await results.verifyDepartureTime(9, 16);

    await results.verifyArrivalTime(10, 17);

    await results.verifyDurationTime(481, true);
  });

  async function filterFlight(page,title) {
    const filters: FiltersPO = new FiltersPO(page);

    await filters.clickFiltersButton();
    await filters.clickNonStopFlight();
    await filters.clickClearAllAirlinesButton();
    await filters.clickAirlinesCheckbox(title);
 
    // await filters.slideFilters(SlidersEnum.maxPrice, -300, 0); // set max price 350
    // await handleAdIfPresent();
    // await filters.slideFilters(SlidersEnum.goDepartureMax, -350, 0); // set max departure 08:00
    // await handleAdIfPresent();
    // await filters.slideFilters(SlidersEnum.returnArrivalMin, 400, 0); // set min return 18:00
    // await handleAdIfPresent();
    // await filters.slideFilters(SlidersEnum.travelTime, -400, 0); // set max travel time 8h

    await filters.clickArrivalReturnRadioButton();
    await filters.clickDoneButton();
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(3000)

  }
});
