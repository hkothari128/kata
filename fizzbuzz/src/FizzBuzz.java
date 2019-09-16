public class FizzBuzz {
    int actualNum;
    FizzBuzz(String num) {
        try {
            actualNum = Integer.parseInt((num));

        } catch (NumberFormatException e) {

        }
    }

    int getActualNum() { return actualNum;}
}
