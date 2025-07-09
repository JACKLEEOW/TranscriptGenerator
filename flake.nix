{
  description = "dev setup for nix";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs_22
            pkgs.yarn
            pkgs.git
          ];
          shellHook = ''
            echo "Development environment ready."
            echo "Run 'yarn install' and 'yarn dev'"
          '';
        };
      });
}