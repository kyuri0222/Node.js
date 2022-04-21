//자료구조 과제 #2 (60185077 김규리)

public class Main {

	public static void main(String[] args) {
		
		// 17번 
		SList<Integer> sl1 = new SList<Integer>();
		sl1.insertFront(50);
		sl1.insertFront(40);
		sl1.insertFront(30);
		sl1.insertFront(20);
		sl1.insertFront(10);
		System.out.print("Sorted List 1: ");
		sl1.print();

		SList<Integer> sl2 = new SList<Integer>();
		sl2.insertFront(55);
		sl2.insertFront(37);
		sl2.insertFront(35);
		sl2.insertFront(18);
		sl2.insertFront(15);
		System.out.print("Sorted List 2: ");
		sl2.print();
		
		SList<Integer> ml = new SList<Integer>();
		ml.insertFront(-1);
		
		System.out.print("Merged List:   ");
		ml.mergeLists(sl1.head,sl2.head);
		ml.print();
		
		System.out.println("----------------");
		System.out.println(" ");
		
		
		// 20번 
		SList<Integer> sl = new SList<Integer>();
		sl.insertFront(45);
		sl.insertFront(17);
		sl.insertFront(20);
		sl.insertFront(50);
		sl.insertFront(57);
		sl.insertFront(35);
		sl.insertFront(10);
		sl.insertFront(15);
		sl.insertFront(90);
		sl.insertFront(10);
		System.out.print("Single List:   ");
		sl.print();
		
		int k = 20;
		
		SList<Integer> l1 = new SList<Integer>();
		SList<Integer> l2 = new SList<Integer>();
		sl.splitList(sl.head, k, l1, l2);
		
		System.out.println("k="+k+"을 기준으로 두 개의 리스트로 분리: ");
		System.out.print("List 1(<= "+k+"): ");
		l1.print();
		System.out.print("List 2(> "+k+"):  ");
		l2.print();
		
	}
	
}