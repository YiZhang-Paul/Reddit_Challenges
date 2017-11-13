﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Drawing;

namespace simpleCalculator {
    class Resizer {

        private const int _thickness = 15;

        public const int htLeft = 10;
        public const int htRight = 11;
        public const int htTop = 12;
        public const int htTopLeft = 13;
        public const int htTopRight = 14;
        public const int htBottom = 15;
        public const int htBottomLeft = 16;
        public const int htBottomRight = 17;

        public Form Form { get; private set; }
        public Rectangle Top { get { return new Rectangle(0, 0, Form.ClientSize.Width, _thickness); } }
        public Rectangle Left { get { return new Rectangle(0, 0, _thickness, Form.ClientSize.Height); } }
        public Rectangle Bottom { get { return new Rectangle(0, Form.ClientSize.Height - _thickness, Form.ClientSize.Width, _thickness); } }
        public Rectangle Right { get { return new Rectangle(Form.ClientSize.Width - _thickness, 0, _thickness, Form.ClientSize.Height); } }
        public Rectangle TopLeft { get { return new Rectangle(0, 0, _thickness, _thickness); } }
        public Rectangle TopRight { get { return new Rectangle(Form.ClientSize.Width - _thickness, 0, _thickness, _thickness); } }
        public Rectangle BottomLeft { get { return new Rectangle(0, Form.ClientSize.Height - _thickness, _thickness, _thickness); } }
        public Rectangle BottomRight { get { return new Rectangle(Form.ClientSize.Width - _thickness, Form.ClientSize.Height - _thickness, _thickness, _thickness); } }

        public Resizer(Form form) {

            Form = form;
        }
    }
}