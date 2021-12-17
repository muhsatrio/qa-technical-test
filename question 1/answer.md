## Explanation

This issue is because the inquiried data row based on `TRX_ID` that also return `ADDRESS_SHIP`, `DATE_ORDER`, `SELLER_NAME`, `DELIVERY_SERVICE` from database is not same with the UI Interface shown.

## Solution Scenario Testing

1. Add query to inquiry data based on `TRX_ID` and save in a variable, for example named variable is `data`
2. Parse UI Interface and saved value `Seller`, `Delivery Service`, `Date order`, and `Adress Shipment`in variable `parsedValue`
3. Assert between `data["ADDRESS_SHIP"]` and `parsedValue["Adress Shipment"]`, if error then stop testing
4. Assert between `data["DATE_ORDER"]` and `parsedValue["Date order"]`, if error then stop testing
5. Assert between `data["SELLER_NAME"]` and `parsedValue["Seller"]`, if error then stop testing
6. Assert between `data["DELIVERY_SERVICE"]` and `parsedValue["Delivery Service"]`, if error then stop testing
7. Testing end