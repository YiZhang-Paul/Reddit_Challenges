﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace footTrafficAnalysis {
    class Program {
        static void Main(string[] args) {
            //challenge input
            string log1 = @"0 0 I 540
                            1 0 I 540
                            0 0 O 560
                            1 0 O 560";
            string log2 = @"0 11 I 347
                            1 13 I 307
                            2 15 I 334
                            3 6 I 334
                            4 9 I 334
                            5 2 I 334
                            6 2 I 334
                            7 11 I 334
                            8 1 I 334
                            0 11 O 376
                            1 13 O 321
                            2 15 O 389
                            3 6 O 412
                            4 9 O 418
                            5 2 O 414
                            6 2 O 349
                            7 11 O 418
                            8 1 O 418
                            0 12 I 437
                            1 28 I 343
                            2 32 I 408
                            3 15 I 458
                            4 18 I 424
                            5 26 I 442
                            6 7 I 435
                            7 19 I 456
                            8 19 I 450
                            0 12 O 455
                            1 28 O 374
                            2 32 O 495
                            3 15 O 462
                            4 18 O 500
                            5 26 O 479
                            6 7 O 493
                            7 19 O 471
                            8 19 O 458";

            RoomMonitor monitor = new RoomMonitor();
            monitor.AnalyzeTraffic(log1);
            monitor.DisplayTraffic();
            monitor.AnalyzeTraffic(log2);
            monitor.DisplayTraffic();
        }
    }
}