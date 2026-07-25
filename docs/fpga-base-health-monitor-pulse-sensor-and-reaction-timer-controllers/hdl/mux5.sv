`timescale 1ns / 1ps

module mux5(
    input  logic [3:0] d0, d1, d2, d3,
    input  logic [2:0] sel,
    output logic [3:0] y
);
    always_comb begin
        unique case (sel)
            3'd0: y = 4'd0;
            3'd1: y = d0;
            3'd2: y = d1;
            3'd3: y = d2;
            3'd4: y = d3;
            default: y = 4'd0;
        endcase
    end
endmodule
