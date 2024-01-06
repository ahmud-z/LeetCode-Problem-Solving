#include<iostream>
using namespace std;

bool isPalindrome(long int num)
{
    long int temp = num;
    long int rem = 0;
    long int rev_num = 0;

    if(num==0)
    {
        return true;
    }

    while(num!=0)
    {
        rem = num%10;
        rev_num = rev_num * 10 + rem;
        num = num/10;
    }

    if(rev_num == temp && rev_num>0)
    {
        return true;
    }
    else
    {
        return false;
    }
}


int main()
{
    int num;
    cin>>num;

    cout<<isPalindrome(num)<<endl;

    return 0;
}
