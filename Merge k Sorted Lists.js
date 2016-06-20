function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


// 数据结构（最小堆）
function BinaryHeap(scoreFunction)
{
    this.content = [];
    this.scoreFunction = scoreFunction;
};

// 加入到数组的后面，也就是树的叶节点
BinaryHeap.prototype.Push = function(element) {
    // 在数组后面加入
    this.content.push(element);
    this.SinkDown(this.content.length - 1);
};

// 返回数组的第一个元素，也就是树的根节点
BinaryHeap.prototype.Pop = function() {
    var result = this.content[0];
    // 返回数组的最后一个元素
    var end = this.content.pop();
    // 将最后一个元素设置为第一个，再进行排序
    if (this.content.length > 0) {
        this.content[0] = end;
        // 重新进行排序
        this.BubbkeUp(0);
    }
    return result;
};

// 大小
BinaryHeap.prototype.Size = function(){
    return this.content.length;
};

// 删除
BinaryHeap.prototype.Romove = function(element){
    var i = this.content.indexOf(element);
    // 获得数组的最后的元素
    var end = this.content.pop();
    if (i !== this.content.length - 1) {
        this[i] = end;
        // 判断删除的节点的值和数组最后的元素
        if (this.scoreFunction(end) < this.scoreFunction(element)) {
            this.SinkDown(i);
        }
        else {
            this.BubbkeUp(i);
        }
    }
};

//重新排序
BinaryHeap.prototype.RescoreElement = function(element) {
    this.SinkDown(this.content.indexOf(element));
};

// 上移
BinaryHeap.prototype.BubbkeUp = function(n){
    // 计算子节点的位置
    var length = this.content.length;
    var element = this.content[n];
    var elemScore = this.scoreFunction(element);

    while(1) {
        var child2N = (n + 1)<<1;
        var child1N = child2N - 1;

        var swap = null;
        //如果子节点存在
        if(child1N < length){
            //计算分数
            var child1 = this.content[child1N];
            var child1Score = this.scoreFunction(child1);

            //如果子节点的值小于父亲节点，则需要进行交换
            if(child1Score < elemScore){
                swap = child1N;
            }
        }
        //同样操作
        if(child2N < length){
            //计算分数
            var child2 = this.content[child1N];
            var child2Score = this.scoreFunction(child2);

            //如果子节点的值小于父亲节点，则需要进行交换
            if(child2Score < (swap === null ? elemScore : child1Score)){
                swap = child2N;
            }
        }

        //如果父亲节点需要移动，则进行移动，否则continue
        if (swap !== null) {
            this.content[n] = this[swap];
            this.content[swap] = element;
            n = swap;
        }
        else {
            break;
        }
    }

};

// 下移
BinaryHeap.prototype.SinkDown = function(n){
    var element = this.content[n];
    while(n > 0) {
        // 父结点的位置
        var parentN = ((n+1) >> 1)-1;
        var parent = this.content[parentN];

        if(this.scoreFunction(element) < this.scoreFunction(parent)) {
            this.content[parentN] = element;
            this.content[n] = parent;

            n = parentN;
        }
        else {
            break;
        }
    }
};


/*
    核心思路：分治法
 */
var mergeKLists = function(lists) {


};

/*
    核心思路：将每个链表的最小值拿出来建立一个最小堆，每次取堆顶的值，合并成一个排序的链表
 */
var mergeKLists = function(lists) {
    //1.边界判断
    if (lists.length === 0)
        return null;

    //2.取出每条链表的最小值，建立最小堆
    var heap = new BinaryHeap(function(node) {
        return node.val;
    });

    for (var i = 0; i < lists.length; i++)
    {
        var linkedList = lists[i];

        heap.Push(linkedList);
    }

    //3.取出堆顶，加入到结果链表中
    var resultList = new ListNode(-1);
    var resultNode = resultList;
    while (heap.Size() !== 0)
    {
        //出堆
        var node = heap.Pop();
        resultNode.next = node;

        //结果数组的下一个
        resultNode = resultNode.next;

        //出堆的下一个
        node = node.next;
        if (node) heap.Push(node);
    }

    return resultList.next;
};


var list1 = new ListNode(1);
var listNode = list1;
for (var i = 0; i < 2; i++)
{
    var node = new ListNode(i+2);
    listNode.next = node;
    listNode = listNode.next;
}

var list2 = new ListNode(3);
listNode = list2;
for (var i = 0; i < 2; i++)
{
    var node = new ListNode(i+4);
    listNode.next = node;
    listNode = listNode.next;
}

var lists = [];
lists.push(list1);
lists.push(list2);
var result = mergeKLists(lists);
console.log(result);