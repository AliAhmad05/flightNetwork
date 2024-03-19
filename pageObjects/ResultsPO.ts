import { Page, expect } from '@playwright/test';

import { BaseActions } from '../utilities/BaseActions';

export class ResultsPO extends BaseActions {
  page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  // Define all selectors
  private clearButton = 'button[data-testid="filtersForm-resetFilters-button"]';
  private doneButton = 'button[data-testid="filtersForm-applyFilters-button"]';
  private filtersButton = 'button[data-testid="resultPage-toggleFiltersButton-button"]';
  private allFilters = 'div[data-testid="resultPage-searchFilters-content"]';

  // airlines
  private clearAllAirlinesButton = 'div[data-testid="resultPage-AIRLINESFilter-content"] span:nth-child(1)';
  private selectAllAirlinesButton = 'div[data-testid="resultPage-AIRLINESFilter-content"] span:nth-child(2)';
  private aegeanCheckbox = 'input#airlines-A3';

  // no of stops
  private nonStopButton = 'label[data-testid="MAX_STOPS-direct"]';
  private maxOneStopButton = 'label[data-testid="MAX_STOPS-max1"]';
  private allStopsButton = 'label[data-testid="MAX_STOPS-all"]';

  // departure - arrival times
  private departureGoRadioButton = 'input#departure-0';
  private departureReturnRadioButton = 'input#departure-1';
  private arrivalGoRadioButton = 'input#arrival-0';
  private arrivalReturnRadioButton = 'input[data-testid="resultPage-departureArrivalFilter-arrival1-radio"]';

  // Methods translated from Java to TypeScript with Playwright logic

  // Clicks Filter Button and opens filter menu
  public async clickFiltersButton(): Promise<void> {
    await this.page.click(this.filtersButton);
  }

  // Clicks Non Stop Flight Button at Filters
  public async clickNonStopFlight(): Promise<void> {
    await this.page.click(this.nonStopButton);
  }

  // Clicks All Stops Flight Button at Filters
  public async clickAllStopsButton(): Promise<void> {
    await this.page.click(this.allStopsButton);
  }

  // Clicks Max one stop Flight Button at Filters
  public async clickMaxOneStopButton(): Promise<void> {
    await this.page.click(this.maxOneStopButton);
  }

  // Clicks Clear All Airlines Button at Filters
  public async clickClearAllAirlinesButton(): Promise<void> {
    await this.page.click(this.clearAllAirlinesButton);
  }

  // Clicks Select All Airlines Button at Filters
  public async clickSelectAllAirlinesButton(): Promise<void> {
    await this.page.click(this.selectAllAirlinesButton);
  }

  // Clicks Aegean Airlines Checkbox at Filters
  public async clickAegeanAirlinesCheckbox(): Promise<void> {
    await this.page.click(this.aegeanCheckbox);
  }

  // Clicks Arrival Go Radio Button at Filters
  public async clickArrivalGoRadioButton(): Promise<void> {
    await this.page.click(this.arrivalGoRadioButton);
  }

  // Clicks Arrival Return Radio Button at Filters
  public async clickArrivalReturnRadioButton(): Promise<void> {
    await this.page.click(this.arrivalReturnRadioButton);
  }

  // Clicks Clear Button at Filters
  public async clickClearButton(): Promise<void> {
    await this.page.click(this.clearButton);
  }

  // Clicks Done Button at Filters
  public async clickDoneButton(): Promise<void> {
    await this.page.click(this.doneButton);
  }

  async verifyNumberOfFlights(expectedFlightCount: string): Promise<void> {
    const numberOfFlightsElement = await this.page.locator('[data-testid="resultPage-filters-header"]').innerText()
    await expect.soft(numberOfFlightsElement).toContain(expectedFlightCount);
  }

  async verifyCompanyName(expectedCompanyName: string): Promise<void> {
    // Replace the selector below with the actual selector for the company name element in your application
    const companyNameElement = await this.page.locator('[data-testid="tripDetails-segment"]').nth(1).innerText();
    await expect(companyNameElement).toContain(expectedCompanyName);
  }

  async verifyDepartureTime(minTime: number, maxTime: number): Promise<void> {
    // Replace the selector below with the actual selector for the departure time element in your application
    const departureTimeElement = await this.page.locator('selector-for-departure-time-element');
  }

  async verifyArrivalTime(minTime: number, maxTime: number): Promise<void> {
    // Replace the selector below with the actual selector for the arrival time element in your application
    const arrivalTimeElement = await this.page.locator('selector-for-arrival-time-element');
  }

  async verifyDurationTime(durationMinutes: number, isLessThan: boolean): Promise<void> {
    // Replace with the actual selector for the flight duration element
    const durationElement = await this.page.locator('selector-for-flight-duration-element');
  }

  async verifySummaryResults(): Promise<void> {

    await expect(this.page.locator('[data-testid="mainContent"]')).toBeVisible()

    const expectedMap = {
        "Recommended": "CA$134.06",
        "Promotion": "CA$134.06",
        "Cheapest": "CA$134.06",
        "Shortest": "CA$167.66"
      };
    const numEntries = Object.values(expectedMap).length;

    for (let i = 0; i < numEntries; i++) {
      const value = Object.values(expectedMap)[i];
      const summaryElement = await this.page.locator('[data-testid="result-quick-sort-button"]').nth(`${i}`);
      await expect(summaryElement).toContainText(value);
    }
  }
}
