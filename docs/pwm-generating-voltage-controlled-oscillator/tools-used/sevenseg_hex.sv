`timescale 1ns / 1ps

module sevenseg_hex(
    input  logic [3:0] data,
    output logic [6:0] segs_n
);
    logic [6:0] y;

    always_comb begin
        case (data)
            4'd0: y = 7'b111_1110;
            4'd1: y = 7'b011_0000;
            4'd2: y = 7'b110_1101;
            4'd3: y = 7'b111_1001;
            4'd4: y = 7'b011_0011;
            4'd5: y = 7'b101_1011;
            4'd6: y = 7'b101_1111;
            4'd7: y = 7'b111_0000;
            4'd8: y = 7'b111_1111;
            4'd9: y = 7'b111_0011;
            4'ha: y = 7'b111_0111;
            4'hb: y = 7'b110_0000;
            4'hc: y = 7'b000_1101;
            4'hd: y = 7'b011_1101;
            4'he: y = 7'b100_1111;
            4'hf: y = 7'b100_0111;
            default: y = 7'b000_0000;
        endcase
    end

    assign segs_n = ~y;
endmodule
