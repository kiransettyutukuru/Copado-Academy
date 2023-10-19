public class TemperatureConverter {
     // Takes a Fahrenheit temperature and returns the Celsius equivalentabc.
     //Rollback functionality test
     //PR status on Azure
    public static Decimal FahrenheitToCelsius(Decimal fh) {
        Decimal cs = (fh - 32) * 5/9;
        return cs.setScale(2);
    }
}