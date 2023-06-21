public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        
        Car car = new Car("AWQ456", new Account("Dominic Toreto", "12345678"));
        car.passengers = 3;
        car.printDataCar();

        Car car2 = new Car("TYQ456", new Account("Bryan Oconel", "87654321"));
        car2.passengers = 3;
        car2.printDataCar();
    }
}
