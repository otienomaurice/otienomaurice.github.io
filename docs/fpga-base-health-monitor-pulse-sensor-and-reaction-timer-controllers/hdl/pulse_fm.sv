//-----------------------------------------------------------------------------
// Module Name : pulse_fsm
// Project : ECE 211 Digital Circuits 1
//-----------------------------------------------------------------------------
// Author : John Nestor <nestorj@lafayette.edu>
// Created : April 2023
//-----------------------------------------------------------------------------
// Description : State machine that implements a simple comparator with hysteresis
// Threshold parameters THRESH_HI and THRESH_LO can be overriden
// on instantation to adjust behavior
//-----------------------------------------------------------------------------
module pulse_fsm(
 input logic clk,
 input logic rst,
 input logic [11:0] din,
 output logic pulse
 );

 parameter THRESH_HI = 12'd2800;
 parameter THRESH_LO = 12'd2100;

 logic din_gt_hi, din_gt_lo;

 // comparators
 assign din_gt_hi = (din > THRESH_HI);
 assign din_gt_lo = (din > THRESH_LO);

 typedef enum logic { LO, HI } states_t;

 states_t ps, ns;

 always_ff @(posedge clk)
 if (rst) ps <= LO;
 else ps <= ns;

 always_comb begin
 ns = LO;
 pulse = 0;
 case (ps)
 LO: begin
 pulse = 0;
 if (din_gt_hi) ns = HI;
 else ns = LO;
 end
 HI: begin
 pulse = 1;
 if (din_gt_lo) ns = HI;
 else ns = LO;
 end
 endcase
 end
endmodule