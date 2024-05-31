import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class BubbleSortTest {
    
    @Test
    public void testBubbleSort() {
        int[] arr = {5, 2, 8, 12, 1, 6};
        int[] expected = {1, 2, 5, 6, 8, 12};
        
        BubbleSort.bubbleSort(arr);
        
        Assertions.assertArrayEquals(expected, arr);
    }
    @Test
public void testBubbleSortWithDuplicates() {
    int[] arr = {5, 2, 8, 12, 1, 6, 2, 5, 12};
    int[] expected = {1, 2, 2, 5, 5, 6, 8, 12, 12};
    
    BubbleSort.bubbleSort(arr);
    
    Assertions.assertArrayEquals(expected, arr);
}
}
