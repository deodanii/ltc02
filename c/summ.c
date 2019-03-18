#include "stdio.h"
int summ (int a, int b)
{
    return a+b;
}
void main (void)
{ int a,b;
  printf ("\nInput int a and b\n");
  scanf ("%d%d", &a,&b);
    printf ("\nSumm %d", summ (a,b));
}