#include<iostream>
using namespace std;

int main()
{
    int arr[] = {1,3,5,6};

    int num = 2;
    int pos = 0;
    int flag = 0;

    for(int i = 0; i<4; i++)
    {
        if(arr[i] == num)
        {
            flag = i;
            break;
        }

        if(arr[i]>=num)
        {
            pos = i;
            break;
        }
        else
        {
            pos = i+1;
        }
    }

    if(flag!=0)
    {
        cout<<flag<<endl;
    }
    else
    {
        cout<<pos<<endl;
    }

    return 0;
}
