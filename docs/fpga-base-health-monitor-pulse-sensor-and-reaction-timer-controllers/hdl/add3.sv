`timescale 1ns / 1ps

module add3(
    input  logic [3:0] a,
    output logic [3:0] y
);
    always_comb begin
        if (a < 4'd5) y = a;
        else          y = a + 4'd3;
    end
endmodule
