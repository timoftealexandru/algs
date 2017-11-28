#Implement int sqrt(int x).
#Compute and return the square root of x.
#If x is not a perfect square, return floor(sqrt(x))
#Example :
#Input : 11
#Output : 3

class Solution:
    # @param A : integer
    # @return an integer
    def sqrt(self, A):
        if A==0 or A==1:
            return A

        end=A
        start=1

        while start<= end:
            mid = (start+end)/2
            if mid*mid == A:
                return mid

            if mid*mid < A:
                start=mid+1
                ans = mid
            else:
                end=mid-1

        return ans

