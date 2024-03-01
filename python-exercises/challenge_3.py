# Python Version Used: 3.8.10

# NOTE: typing is a part of python stdlib for type checking in python 3.5 and above, it is not necessary to install it
from typing import List

# DS/A: String Manipulation, Arrays
# Assumptions: The pieces never exceed 6 in length, and the dictionary is not empty, and the pieces are not empty
class Solution:
    """
    This class contains the solution to the third challenge, which is to find all six letter words that can be formed using a collection of "pieces" that are present in a dictionary of words.
    """
    
    def __init__(self, dictionary: List[str]):
        """
        Constructor for the Solution class: Creates a new instance of the Solution class with the given dictionary of words

        Args:
            dictionary (List[str]): The list of words to be used as the dictionary 
        """
        self.dictionary = dictionary
    
    def findClosestWord(self, piece:str) -> str:
        """
        Finds the closest word to the given piece from the dictionary

        Args:
            prefix (str): The prefix to be used to find the closest word

        Returns:
            str: The closest word to the prefix
        """
        for word in self.dictionary:
            if word.startswith(piece):
                return word
            elif word.endswith(piece):
                return word
    
    def findWholes(self, pieces: List[str]) -> None:
        """
        This function takes in a string of pieces and returns all six letter words that can be formed using the pieces

        Args:
            pieces (List[str]): The list of pieces 

        Returns:
            None. Prints on standard output
        """
        # Idea: Find the lengths of the pieces, then create a new list of pieces where each index stores a list of pieces of the same length 
        res = [ [] for _ in range(6) ]
        for piece in pieces:
            res[len(piece)].append(piece)
        # Iterate over the pieces and find all possible combinations of pieces that can form a six letter word
        for i in range(1, len(res)):
            j = 6 - i
            for x in res[i]:
                for y in res[j]:
                    closest = self.findClosestWord(x)
                    word = x + y
                    if word in self.dictionary:
                        print(x, "+", y, "=>", word)
                    else:
                        print(word, "!=", closest)
        return None
    
# Example usage
input_dict = ['albums', 'barely', 'befoul', 'convex', 'hereby', 'jigsaw', 'tailor', 'weaver']
input_pieces = ['al', 'bums', 'bar', 'ely', 'be', 'foul', 'con', 'vex', 'here', 'by', 'jig', 'saw', 'tail', 'or', 'we', 'aver']
sol = Solution(input_dict)
sol.findWholes(input_pieces)
# Output: 
# al + bums => albums
# alfoul != albums
# alhere != albums
# altail != albums
# alaver != albums
# bebums != befoul
# be + foul => befoul
# behere != befoul
# betail != befoul
# beaver != befoul
# bybums != hereby
# byfoul != hereby
# byhere != hereby
# bytail != hereby
# byaver != hereby
# orbums != tailor
# orfoul != tailor
# orhere != tailor
# ortail != tailor
# oraver != tailor
# webums != weaver
# wefoul != weaver
# wehere != weaver
# wetail != weaver
# we + aver => weaver
# barbar != barely
# bar + ely => barely
# barcon != barely
# barvex != barely
# barjig != barely
# barsaw != barely
# elybar != barely
# elyely != barely
# elycon != barely
# elyvex != barely
# elyjig != barely
# elysaw != barely
# conbar != convex
# conely != convex
# concon != convex
# con + vex => convex
# conjig != convex
# consaw != convex
# vexbar != convex
# vexely != convex
# vexcon != convex
# vexvex != convex
# vexjig != convex
# vexsaw != convex
# jigbar != jigsaw
# jigely != jigsaw
# jigcon != jigsaw
# jigvex != jigsaw
# jigjig != jigsaw
# jig + saw => jigsaw
# sawbar != jigsaw
# sawely != jigsaw
# sawcon != jigsaw
# sawvex != jigsaw
# sawjig != jigsaw
# sawsaw != jigsaw
# bumsal != albums
# bumsbe != albums
# bumsby != albums
# bumsor != albums
# bumswe != albums
# foulal != befoul
# foulbe != befoul
# foulby != befoul
# foulor != befoul
# foulwe != befoul
# hereal != hereby
# herebe != hereby
# here + by => hereby
# hereor != hereby
# herewe != hereby
# tailal != tailor
# tailbe != tailor
# tailby != tailor
# tail + or => tailor
# tailwe != tailor
# averal != weaver
# averbe != weaver
# averby != weaver
# averor != weaver
# averwe != weaver