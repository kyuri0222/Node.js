// 자료구조 과제 #3 (60185077 김규리)

public class Node <E> {
	private E item;
	private Node<E> next;
	
	// 생성자
	public Node(E newItem, Node<E> node) {
		item = newItem;
		next = node;
	}
	
	// get 메소드들과 set 메소드들
	public E getItem() {return item;}
	public Node<E> getNext() {return next;}
	public void setItem(E newItem) {item = newItem;}
	public void setNext(Node<E> newNext) {next = newNext;}
}