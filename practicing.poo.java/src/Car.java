public class Car {
    Integer id;
    String license;
    Account driver;
    Integer passengers;

    public Car (String license, Account driver){
        this.license = license;
        this.driver = driver;
    }

    public void printDataCar() {
        System.out.println("license: " + license + "Name driver: " + driver.name);
    }
}
