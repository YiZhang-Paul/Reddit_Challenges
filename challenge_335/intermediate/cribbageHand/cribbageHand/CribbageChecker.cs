﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cribbageHand {
    class CribbageChecker {
        private StandardDeck deck = new StandardDeck();

        /**
         * get game score
         * @param {string[]} [hand] - current hand
         * 
         * @return {int} [game score]
         */
        public int GetScore(string[] hand) {
            List<string[]> pairs = GetPairs(hand);
            int flush = GetFlush(hand);
            List<string> nobs = GetNobs(hand);
            return nobs.Count;
        }
        /**
         * count occurrence of each suit
         * @param {string[]} [hand] - current hand to check
         * 
         * @return {Dictionary<char, List<string>>} [occurrence of each suit]
         */
        public Dictionary<char, List<string>> GetOccurrence(string[] hand) { 
            var counter = new Dictionary<char, List<string>>();
            foreach(string card in hand) {
                char suit = this.deck.GetSuit(card);
                counter[suit] = counter.ContainsKey(suit) ? counter[suit] : new List<string>();
                counter[suit].Add(card);
            }
            return counter;
        }
        /**
         * check for pairs in a hand
         * @param {string[]} [hand] - current hand to check
         * 
         * @return {List<string[]>} [all pairs]
         */
        public List<string[]> GetPairs(string[] hand) {
            var counter = GetOccurrence(hand);
            var pairs = from pair in counter
                       where pair.Value.Count >= 2
                      select pair.Value.ToArray();
            return pairs.ToList();
        }
        /**
         * check for flush in a hand
         * @param {string[]} [hand] - current hand to check
         * 
         * @return {int} [flush count]
         */
        public int GetFlush(string[] hand) {
            var suits = hand.Select(card => this.deck.GetSuit(card));
            if(new HashSet<char>(suits).Count == 1) {
                return 5;
            }
            return new HashSet<char>(suits.Take(suits.Count() - 1)).Count == 1 ? 4 : 0;
        }
        /**
         * check for all Nobs in a hand
         * @param {string[]} [hand] - current hand to check
         * 
         * @return {List<string>} [all Nobs]
         */
        public List<string> GetNobs(string[] hand) {
            List<string> nobs = new List<string>();
            for(int i = 0; i < hand.Length - 1; i++) {
                bool isJack = this.deck.GetRank(hand[i]) == 11;
                bool sameSuit = this.deck.GetSuit(hand[i]) == this.deck.GetSuit(hand.Last());
                if(isJack && sameSuit) {
                    nobs.Add(hand[i]);
                }
            }
            return nobs;
        }
    }
}