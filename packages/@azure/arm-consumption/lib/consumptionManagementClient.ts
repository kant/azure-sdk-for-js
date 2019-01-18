/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { ConsumptionManagementClientContext } from "./consumptionManagementClientContext";


class ConsumptionManagementClient extends ConsumptionManagementClientContext {
  // Operation groups
  usageDetails: operations.UsageDetails;
  marketplaces: operations.Marketplaces;
  balances: operations.Balances;
  reservationsSummaries: operations.ReservationsSummaries;
  reservationsDetails: operations.ReservationsDetails;
  reservationRecommendations: operations.ReservationRecommendations;
  budgets: operations.Budgets;
  priceSheet: operations.PriceSheet;
  tags: operations.Tags;
  forecasts: operations.Forecasts;
  operations: operations.Operations;
  aggregatedCost: operations.AggregatedCost;
  charges: operations.Charges;

  /**
   * Initializes a new instance of the ConsumptionManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Azure Subscription ID.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.ConsumptionManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.usageDetails = new operations.UsageDetails(this);
    this.marketplaces = new operations.Marketplaces(this);
    this.balances = new operations.Balances(this);
    this.reservationsSummaries = new operations.ReservationsSummaries(this);
    this.reservationsDetails = new operations.ReservationsDetails(this);
    this.reservationRecommendations = new operations.ReservationRecommendations(this);
    this.budgets = new operations.Budgets(this);
    this.priceSheet = new operations.PriceSheet(this);
    this.tags = new operations.Tags(this);
    this.forecasts = new operations.Forecasts(this);
    this.operations = new operations.Operations(this);
    this.aggregatedCost = new operations.AggregatedCost(this);
    this.charges = new operations.Charges(this);
  }
}

// Operation Specifications

export {
  ConsumptionManagementClient,
  ConsumptionManagementClientContext,
  Models as ConsumptionManagementModels,
  Mappers as ConsumptionManagementMappers
};
export * from "./operations";
