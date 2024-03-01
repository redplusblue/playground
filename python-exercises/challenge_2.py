# Python Version Used: 3.8.10

# DS/A: String Manipulation, Dynamic Programming
# Assumptions: The case of the input string is Important
class Solution:
    """
    This class contains the solution to the second challenge, which was to find the longest palindromic substring in a given string 
    """
    def longestPalindrome(self, s: str) -> str:
        """
        This function takes in a string and returns the longest palindromic substring in the string

        Args:
            s (str): The input string

        Returns:
            str: The longest palindromic substring in the input string
        """
        # Idea: Reverse the input string and find the longest common subsequence between the input string and the reversed string
        if not s:
            return ""
        # dp -> a 2D array for dynamic programming.
        # dp[i][j] will store the length of the longest palindromic subsequence between s[0:i] and the reverse of s[0:j].
        s_len = len(s)
        s_reversed = s[::-1]
        dp = [[0 for _ in range(s_len + 1)] for _ in range(s_len + 1)]
        max_len, end_index = 0, 0
        # Fill dp array
        for i in range(1, s_len + 1):
            for j in range(1, s_len + 1):
                # When characters match, extend the length of the current palindromic subsequence.
                if s[i - 1] == s_reversed[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                    # Update max_len and end_index if a new maximum is found.
                    # & Ensure the palindrome is continuous.
                    if dp[i][j] > max_len and i - dp[i][j] == s_len - j:
                        max_len = dp[i][j]
                        end_index = i
        return s[end_index - max_len:end_index]
        
    
# Example usage
input_str = "Ilikeracecarsthatgofast"
sol = Solution()
print(sol.longestPalindrome(input_str)) # racecar

input_str = "FourscoreandsevenyearsagoourfaathersbroughtforthonthiscontainentanewnationconceivedinzLibertyanddedicatedtothepropositionthatallmenarecreatedequalNowweareengagedinagreahtcivilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
print(sol.longestPalindrome(input_str)) 
# ranynar