public class Main {

    public static class LinkedListNode {
        public int data;
        public LinkedListNode next;
    }

    public static LinkedListNode partition(LinkedListNode node, int x) {
        LinkedListNode beforeStart = null;
        LinkedListNode afterStart = null;

        while(node !=null){
            LinkedListNode next = node.next;
            System.out.println("node:"+node.data);
            if (node.data < x) {
                node.next = beforeStart;
                beforeStart = node;
            } else {
                node.next = afterStart;
                afterStart = node;
            }
            node = next;
            if (beforeStart == null) {
                return afterStart;
            }
        }

        LinkedListNode head = beforeStart;

        while(beforeStart.next !=null) {
            System.out.println("beforestart"+beforeStart.data);
            beforeStart = beforeStart.next;
        }

        beforeStart.next =afterStart;
        return head;
    }

    public static void main(String[] args) {
        LinkedListNode head = new LinkedListNode();
        LinkedListNode n2 = new LinkedListNode();
        LinkedListNode n3 = new LinkedListNode();
        LinkedListNode n4 = new LinkedListNode();
        LinkedListNode n5 = new LinkedListNode();
        LinkedListNode tail = new LinkedListNode();
        head.next=n2;
        n2.data=50;
        n2.next=n3;
        n3.data=20;
        n3.next=n4;
        n4.data=30;
        n4.next=n5;
        n5.data=10;
        n5.next=tail;

        System.out.println(partition(head, 25).data);
    }
}
