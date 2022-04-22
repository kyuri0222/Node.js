// 자료구조 과제 #3 (60185077 김규리)

public class Main {
	public static void main(String[] args) {
		ListStack<String> stack = new ListStack<String>();
		
		String test1 = "{{(){()}}}";
		stack.palindrome(test1, stack);
		
		String test2 = "{{(){()})()}";
		stack.palindrome(test2, stack);

	}
}