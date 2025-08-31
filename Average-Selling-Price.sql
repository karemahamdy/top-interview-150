
SELECT Prices.product_id, IFNULL(ROUND(SUM(Prices.price * UnitsSold.units)/SUM(UnitsSold.Units),2),0) AS average_price 
FROM Prices 
LEFT  JOIN UnitsSold 
ON Prices.product_id = UnitsSold.product_id 
AND UnitsSold.purchase_date between Prices.start_date and Prices.end_date
GROUP BY Prices.product_id