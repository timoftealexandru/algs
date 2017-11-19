
//Implement an algorithm to find the kth to last element of a singly linked list.

public class Main {

    static class LinkedListNode {
        public LinkedListNode next;
        public int data;
    }

    public static class IntWrapper {
        public int value = 0;
    }

    public static int nthToLast(LinkedListNode head, int k) {
        if (head == null) {
            return 0;
        }
        int i = nthToLast(head.next, k) + 1;
        System.out.println("i=" + i);
        if (i == k) {
            System.out.println(head.data);
        }
        return i;
    }

    public static LinkedListNode nthToLast2(LinkedListNode head, int k, IntWrapper i) {
        if (head == null) {
            return null;
        }

        LinkedListNode node = nthToLast2(head.next, k, i);
        i.value = i.value + 1;

        if (i.value == k) {
            return head;
        }

        return node;
    }

    public static LinkedListNode nthToLastIterative(LinkedListNode head, int k) {
        if (k <= 0) return null;
        LinkedListNode pi = head;
        LinkedListNode p2 = head;

        for (int i = 0; i < k - 1; i++) {
            if (p2 == null) return null;
            p2 = p2.next;
        }

        if(p2 ==null)return null;

        while(p2.next !=null){
            pi = pi.next;
            p2 = p2.next;
        }
        return pi;
    }

    public static void main(String[] args) {
        LinkedListNode head = new LinkedListNode();
        LinkedListNode n2 = new LinkedListNode();
        LinkedListNode n3 = new LinkedListNode();
        LinkedListNode n4 = new LinkedListNode();
        LinkedListNode n5 = new LinkedListNode();
        LinkedListNode tail = new LinkedListNode();
        head.next=n2;
        n2.data=10;
        n2.next=n3;
        n3.data=20;
        n3.next=n4;
        n4.data=30;
        n4.next=n5;
        n5.data=40;
        n5.next=tail;

        IntWrapper i = new IntWrapper();
        System.out.println(nthToLast2(head, 2, i).data);

    }
}

