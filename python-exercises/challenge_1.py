# Python Version Used: 3.8.10

# Relevant DS/A: HashMaps, String Manipulation, Greedy Algorithm 
# Assumptions: The input string is not empty, and the input string is a valid English number, The input is comma separated and spaces are used to separate the words
class Solution:
    """
    This class contains the solution to the first challenge, which was to convert a string of comma separated numbers in English to the corresponding integer values
    """
    def word_to_int(self, word: str) -> int:
        """
        Takes in a word and returns the corresponding integer value
        Args:
            word (str): The string to be converted to an integer
        Returns:
            int: The integer value of the input string
        """
        hashMap = {
            'negative': -1, 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
            'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10,
            'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15,
            'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20,
            'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70,
            'eighty': 80, 'ninety': 90, 'hundred': 100, 'thousand': 1000, 'million': 1000000
        }
        return hashMap[word]
    
    def word_to_number(self, s: str) -> int:
        """
        Takes in a string that describes a single number and returns the integer value

        Args:
            s (str): The string representation of the number 

        Returns:
            int: The integer value of the input string
        """
        # Split the input string into individual words 
        words = s.split(' ')
        # Two variables to keep track of the cumulative result and the current number
        res, cur = 0, 1
        isNegative = False
        for word in words:
            if word == "negative":
                isNegative = True
                continue
            # Current number
            num = self.word_to_int(word)
            if num >= cur: 
                cur *= num
            else:
                res += cur
                cur = num
        return res + cur if not isNegative else -1 * (res + cur)
    
    def english_to_integer(self, s: str) -> str:
        """
        This Function takes in a string of comma separated numbers in English and returns the corresponding integer values

        Args:
            s (str): The string of comma separated numbers in English

        Returns:
            str: The string of comma separated integer values
        """
        numbers = s.split(',')
        res = ""
        for number in numbers:
            number = number.strip()
            if number == "":
                continue
            else:
                res += str(self.word_to_number(number)) + ", "
        # Remove trailing comma and space
        res = res[:-2]
        return res 
        

# Example usage
input_str = "six, negative seven hundred twenty nine, one million one hundred one"
sol = Solution()
print(sol.english_to_integer(input_str)) 
# 6, -729, 1000101
