public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        
        Car car = new UberX("AWQ456", new Account("Dominic Jackson", "12345678"), "Mercedes Benz", "A Sedan");
        car.setPassengers(4);
        car.printDataCar();

        Car car2 = new Car("TYQ456", new Account("Bryan Smith", "87654321"));
        car2.setPassengers(4);
        car2.printDataCar();
        
    }
}
