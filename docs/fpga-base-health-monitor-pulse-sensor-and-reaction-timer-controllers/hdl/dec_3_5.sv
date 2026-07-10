`timescale 1ns / 1ps

module dec_3_5(
    input  logic [2:0] a,
    output logic dot,
    output logic [7:0] y_n
);
    always_comb begin
        unique case (a)
            3'd0: begin y_n = 8'b11111111; dot = 1'b1; end
            3'd1: begin y_n = 8'b11111110; dot = 1'b1; end
            3'd2: begin y_n = 8'b11111101; dot = 1'b1; end
            3'd3: begin y_n = 8'b11111011; dot = 1'b1; end
            3'd4: begin y_n = 8'b11110111; dot = 1'b0; end
            default: begin y_n = 8'b11111111; dot = 1'b1; end
        endcase
    end
endmodule
