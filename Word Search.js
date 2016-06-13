/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

/*
    其中包括四个对象：字符c，坐标x、y，方向p
    核心思想：
    1.添加第一个和字符相同的元素到栈中;
    2.根据栈最新添加进来的元素找上下左右有没有相匹配字符的元素；
    3.找不到匹配元素则将目标字符的下标递减;
    4.当计数器和目标字符的长度相等时，则返回true；
 */
var Node = function(newc,newx,newy,newp)
{
    this.c = newc;
    this.x = newx;
    this.y = newy;
    this.p = newp;
};

Array.prototype.top = function()
{
    return this[this.length-1];
};

var exist = function(board, word) {
    //1.边界判定
    if (board.length == 0 || board === null)
        return board;

    var rows = board.length;
    var cols = board[0].length;

    for (var i = 0;i < rows;i++)
    {
        for(var j = 0;j < cols;j++)
        {
            if (board[i][j] == word[0])
            {
                //2.添加相同的首个字符
                var visited = [];
                var currNode = new Node(word[0],i,j,0);
                visited.push(currNode);
                board[i][j] = '*';

                var index = 1;
                if (index === word.length)
                    return true;

                while (visited.length !== 0)
                {
                    //3.处理各个方向的字符
                    if (visited.top().p === 0)
                    {
                        visited.top().p = 1;
                        if (visited.top().x > 0 && board[visited.top().x - 1][visited.top().y] === word[index])
                        {
                            var nextNode = new Node(word[index],visited.top().x - 1,visited.top().y,0);
                            visited.push(nextNode);
                            board[nextNode.x][nextNode.y] = '*';
                            index ++;
                            if (index === word.length)
                                return true;
                            continue;
                        }
                    }
                    if (visited.top().p === 1)
                    {
                        visited.top().p = 2;
                        if (visited.top().x < rows-1 && board[visited.top().x + 1][visited.top().y] === word[index])
                        {
                            var nextNode = new Node(word[index],visited.top().x + 1,visited.top().y,0);
                            visited.push(nextNode);
                            board[nextNode.x][nextNode.y] = '*';
                            index ++;
                            if (index === word.length)
                                return true;
                            continue;
                        }
                    }
                    if (visited.top().p === 2)
                    {
                        visited.top().p = 3;
                        if (visited.top().y > 0 && board[visited.top().x][visited.top().y - 1] === word[index])
                        {
                            var nextNode = new Node(word[index],visited.top().x,visited.top().y - 1,0);
                            visited.push(nextNode);
                            board[nextNode.x][nextNode.y] = '*';
                            index ++;
                            if (index === word.length)
                                return true;
                            continue;
                        }
                    }
                    if (visited.top().p === 3)
                    {
                        visited.top().p = 4;
                        if (visited.top().y < cols-1 && board[visited.top().x][visited.top().y + 1] === word[index])
                        {
                            var nextNode = new Node(word[index],visited.top().x,visited.top().y + 1,0);
                            visited.push(nextNode);
                            board[nextNode.x][nextNode.y] = '*';
                            index ++;
                            if (index === word.length)
                                return true;
                            continue;
                        }
                    }
                    //回溯
                    board[visited.top().x][visited.top().y] = visited.top().c;
                    index --;
                    visited.pop();
                }
            }
        }
    }

    return false;
};


var board = [
    ['C','E'],
    ['C','S'],
    ['E','E']
];
var str = "SEE";

var result = exist(board,str);
console.log(result);


