`timescale 1ns / 1ps

module pulse_counter(
    input  logic clk, enb, clr, rst,
    output logic [4:0] q0
);
    always_ff @(posedge clk) begin
        if (rst)      q0 <= '0;
        else if (clr) q0 <= '0;
        else if (enb) q0 <= q0 + 5'd1;
    end
endmodule
