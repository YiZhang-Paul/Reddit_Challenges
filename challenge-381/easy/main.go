package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Printf("getYahtzeeUpper(%v) == %d\n", []uint64{2, 3, 5, 5, 6}, getYahtzeeUpper([]uint64{2, 3, 5, 5, 6}))
	fmt.Printf("getYahtzeeUpper(%v) == %d\n", []uint64{1, 1, 1, 1, 3}, getYahtzeeUpper([]uint64{1, 1, 1, 1, 3}))
	fmt.Printf("getYahtzeeUpper(%v) == %d\n", []uint64{1, 1, 1, 3, 3}, getYahtzeeUpper([]uint64{1, 1, 1, 3, 3}))
	fmt.Printf("getYahtzeeUpper(%v) == %d\n", []uint64{1, 2, 3, 4, 5}, getYahtzeeUpper([]uint64{1, 2, 3, 4, 5}))
	fmt.Printf("getYahtzeeUpper(%v) == %d\n", []uint64{6, 6, 6, 6, 6}, getYahtzeeUpper([]uint64{6, 6, 6, 6, 6}))
	fmt.Printf("getYahtzeeUpper(%v) == %d\n", []uint64{1654, 1654, 50995, 30864, 1654, 50995, 22747, 1654, 1654, 1654, 1654, 1654, 30864, 4868, 1654, 4868, 1654, 30864, 4868, 30864}, getYahtzeeUpper([]uint64{1654, 1654, 50995, 30864, 1654, 50995, 22747, 1654, 1654, 1654, 1654, 1654, 30864, 4868, 1654, 4868, 1654, 30864, 4868, 30864}))
}

func getYahtzeeUpper(numbers []uint64) uint64 {
	var (
		max  uint64
		sums = make(map[uint64]uint64)
	)
	for _, number := range numbers {
		sums[number] += number
		max = uint64(math.Max(float64(sums[number]), float64(max)))
	}
	return max
}
